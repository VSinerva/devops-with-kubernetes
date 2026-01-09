{
  inputs.nixpkgs.url = "nixpkgs";
  outputs =
    { nixpkgs, ... }:
    let
      system = "x86_64-linux";
      pkgs = import nixpkgs { inherit system; };
      bg = cmd: "${pkgs.coreutils-full}/bin/nohup ${cmd} 1>/dev/null 2>&1 &";
      bruno-bg = pkgs.writeScriptBin "br" (bg "${pkgs.bruno}/bin/bruno");
      firefox-bg = pkgs.writeScriptBin "ff" (bg "${pkgs.firefox-devedition}/bin/firefox-devedition");
      freelens-bg = pkgs.writeScriptBin "fl" (bg "${pkgs.freelens-bin}/bin/freelens");
      init-cluster = pkgs.writeScriptBin "init-cluster" "${pkgs.k3d}/bin/k3d cluster create --port 8082:30080@agent:0 -p 8081:80@loadbalancer --agents 2";
      init-storage = pkgs.writeScriptBin "init-storage" "${pkgs.docker}/bin/docker exec k3d-k3s-default-agent-0 mkdir -p /tmp/kube";
    in
    {
      # Utilized by `nix develop`
      devShell.${system} = pkgs.mkShell {
        buildInputs =
          (with pkgs; [
            nodejs_24
            openssl
            cacert
            kubectl
            k3d
            docker
          ])
          ++ [
            bruno-bg
            firefox-bg
            freelens-bg
            init-cluster
            init-storage
          ];
        # Enable auto-complete with `source <(kubectl completion zsh)`
        shellHook = ''
          exec zsh
        '';
      };
    };
}
