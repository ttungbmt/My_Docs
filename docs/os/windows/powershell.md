# PowerShell

## Installation

```shell
# Method 1: winget
winget install JanDeDobbeleer.OhMyPosh -s winget

# Method 2: scoop
scoop install https://github.com/JanDeDobbeleer/oh-my-posh/releases/latest/download/oh-my-posh.json

# Method 3: manual
Set-ExecutionPolicy Bypass -Scope Process -Force; Invoke-Expression ((New-Object System.Net.WebClient).DownloadString('https://ohmyposh.dev/install.ps1'))
```

## Update

```shell
# Method 1: winget
winget upgrade JanDeDobbeleer.OhMyPosh -s winget

# Method 2: scoop
scoop update oh-my-posh

# Method 3: manual
Set-ExecutionPolicy Bypass -Scope Process -Force; Invoke-Expression ((New-Object System.Net.WebClient).DownloadString('https://ohmyposh.dev/install.ps1'))
```

## Configuration
Set PowerShell policy
```shell
Set-ExecutionPolicy AllSigned
```

### Fonts
Oh My Posh was designed to use [Nerd Fonts](https://www.nerdfonts.com/font-downloads)
- CascadiaCode

```shell
oh-my-posh font install
```

### Customise
Edit your PowerShell profile scrip
```shell
code $PROFILE
```

Save file
```shell
# Load prompt configs
oh-my-posh init pwsh --config "$env:POSH_THEMES_PATH\M365Princess.omp.json" | Invoke-Expression

# PowerShell environment for Git
Import-Module posh-git

# Terminal-Icons
Import-Module Terminal-Icons

# PSReadLine
Import-Module PSReadLine
Set-PSReadLineOption -PredictionSource History
Set-PSReadLineOption -PredictionViewStyle ListView

# Fzf
Import-Module PSFzf
Set-PsFzfOption -PsReadLineChordProvider 'Ctrl+f' -PSReadLineChordReverseHistory 'Ctrl+r'


function goto_cdserver { set-location "D:\VNTT\SERVER" }
function goto_cdproject { set-location "D:\VNTT\PROJECT" }
function goto_cdvagrant { set-location "D:\VNTT\SERVER\BecaGIS_Vagrant" }

# Alias (Optional)
Set-Alias g git
Set-Alias v vagrant
Set-Alias d docker
Set-Alias dc docker-compose

Set-Alias cd_server goto_cdserver
Set-Alias cd_project goto_cdproject
Set-Alias cd_vagrant goto_cdvagrant

$work= @{
    project = 'D:\VNTT\PROJECT'
}

# Ex: cd $work.webapp 

# Ultilities (Optional)
function which ($command) {
    Get-Command -Name $command -ErrorAction SilentlyContinue |
        Select-Object -ExpandProperty Path -ErrorAction SilentlyContinue
}
```