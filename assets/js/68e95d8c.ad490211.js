"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7102],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return c}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),u=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=u(n),c=r,w=d["".concat(i,".").concat(c)]||d[c]||m[c]||l;return n?a.createElement(w,s(s({ref:t},p),{},{components:n})):a.createElement(w,s({ref:t},p))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,s=new Array(l);s[0]=d;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var u=2;u<l;u++)s[u]=n[u];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8280:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return i},default:function(){return c},frontMatter:function(){return o},metadata:function(){return u},toc:function(){return m}});var a=n(7462),r=n(3366),l=(n(7294),n(3905)),s=["components"],o={},i="WSL",u={unversionedId:"os/windows/wsl",id:"os/windows/wsl",title:"WSL",description:"Enable Windows Subsystem for Linux system feature",source:"@site/docs/os/windows/wsl.md",sourceDirName:"os/windows",slug:"/os/windows/wsl",permalink:"/my-docs/docs/os/windows/wsl",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/os/windows/wsl.md",tags:[],version:"current",frontMatter:{},sidebar:"windows",previous:{title:"Terminal",permalink:"/my-docs/docs/os/windows/terminal"},next:{title:"Hyper-V",permalink:"/my-docs/docs/os/windows/hyper-v"}},p={},m=[{value:"Enable Windows Subsystem for Linux system feature",id:"enable-windows-subsystem-for-linux-system-feature",level:2},{value:"Installation via Microsoft Store",id:"installation-via-microsoft-store",level:2},{value:"Install Ubuntu on a Non-System Drive",id:"install-ubuntu-on-a-non-system-drive",level:2},{value:"Move WSL 2 Safely to another Drive",id:"move-wsl-2-safely-to-another-drive",level:2},{value:"Cheatsheet",id:"cheatsheet",level:2}],d={toc:m};function c(e){var t=e.components,n=(0,r.Z)(e,s);return(0,l.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"wsl"},"WSL"),(0,l.kt)("h2",{id:"enable-windows-subsystem-for-linux-system-feature"},"Enable Windows Subsystem for Linux system feature"),(0,l.kt)("h2",{id:"installation-via-microsoft-store"},"Installation via Microsoft Store"),(0,l.kt)("p",null,"Enable Windows Subsystem for Linux system feature"),(0,l.kt)("p",null,"Open PowerShell as Administrator and run the following command to enable WSL feature:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"Enable-WindowsOptionalFeature -Online -FeatureName Microsoft-Windows-Subsystem-Linux\n")),(0,l.kt)("p",null,"Download the latest package: ",(0,l.kt)("a",{parentName:"p",href:"https://wslstorestorage.blob.core.windows.net/wslblob/wsl_update_x64.msi"},"https://wslstorestorage.blob.core.windows.net/wslblob/wsl_update_x64.msi")," and install"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"wsl --set-default-version 2\n")),(0,l.kt)("p",null,"Install Ubuntu from Microsoft Store and setup\nCheck Ubuntu verion"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"wsl -l -v\nwsl\nlsb_release -a\n")),(0,l.kt)("h2",{id:"install-ubuntu-on-a-non-system-drive"},"Install Ubuntu on a Non-System Drive"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://kontext.tech/article/308/how-to-install-windows-subsystem-for-linux-on-a-non-c-drive"},"https://kontext.tech/article/308/how-to-install-windows-subsystem-for-linux-on-a-non-c-drive")),(0,l.kt)("p",null,"Download a Linux distro"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"mkdir -p D:\\Programs\\WSL\ncd D:\\Programs\\WSL\n\nInvoke-WebRequest -Uri https://aka.ms/wslubuntu -OutFile Ubuntu.appx -UseBasicParsing\n\n# Rename the downloaded file\nmove .\\Ubuntu.appx .\\Ubuntu.zip\n\n# Extract the zip to Ubuntu folder\nExpand-Archive .\\Ubuntu.zip\n")),(0,l.kt)("p",null,"The following distros are available:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://aka.ms/wslubuntu"},"Ubuntu")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://aka.ms/wslubuntu2004"},"Ubuntu 20.04")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://aka.ms/wslubuntu2004arm"},"Ubuntu 20.04 ARM")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://aka.ms/wsl-ubuntu-1804"},"Ubuntu 18.04")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://aka.ms/wsl-ubuntu-1804-arm"},"Ubuntu 18.04 ARM")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://aka.ms/wsl-ubuntu-1604"},"Ubuntu 16.04")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://aka.ms/wsl-debian-gnulinux"},"Debian GNU/Linux")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://aka.ms/wsl-kali-linux-new"},"Kali Linux")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://aka.ms/wsl-kali-linux-new"},"SUSE Linux Enterprise Server 12")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://aka.ms/wsl-SUSELinuxEnterpriseServer15SP2"},"SUSE Linux Enterprise Server 15 SP2")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://aka.ms/wsl-SUSELinuxEnterpriseServer15SP3"},"SUSE Linux Enterprise Server 15 SP3")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://aka.ms/wsl-opensuse-tumbleweed"},"openSUSE Tumbleweed")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://aka.ms/wsl-opensuseleap15-3"},"openSUSE Leap 15.3")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://aka.ms/wsl-opensuseleap15-2"},"openSUSE Leap 15.2")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://aka.ms/wsl-oraclelinux-8-5"},"Oracle Linux 8.5")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://aka.ms/wsl-oraclelinux-7-9"},"Oracle Linux 7.9")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/WhitewaterFoundry/WSLFedoraRemix/releases/"},"Fedora Remix for WSL"))),(0,l.kt)("p",null,"Or download via IDM: ",(0,l.kt)("a",{parentName:"p",href:"https://aka.ms/wslubuntu"},"https://aka.ms/wslubuntu")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"\n# Go to Ubuntu folder\ncd Ubuntu\n.\\Ubuntu2004.exe\n")),(0,l.kt)("h2",{id:"move-wsl-2-safely-to-another-drive"},"Move WSL 2 Safely to another Drive"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Open a ",(0,l.kt)("strong",{parentName:"li"},"PowerShell")," with Admin access"),(0,l.kt)("li",{parentName:"ol"},"Stop the particular WSL distribution")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"wsl -l -v\nwsl -t Ubuntu\n")),(0,l.kt)("ol",{start:3},(0,l.kt)("li",{parentName:"ol"},"Export to some folder. (Here exporting Ubuntu as ubuntu-ex.tar to Z:wsl2)")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'mkdir -p D:\\export\nwsl --export Ubuntu "D:\\export\\ubuntu-ex.tar"\n')),(0,l.kt)("ol",{start:4},(0,l.kt)("li",{parentName:"ol"},"Unregister previous WSL installation")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"wsl --unregister Ubuntu\n")),(0,l.kt)("ol",{start:5},(0,l.kt)("li",{parentName:"ol"},"Create a new folder and import your WSL installation to that folder.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'mkdir -p D:\\Programs\\WSL\\Ubuntu\nwsl --import Ubuntu "D:\\Programs\\WSL\\Ubuntu" "D:\\export\\ubuntu-ex.tar"\n')),(0,l.kt)("ol",{start:6},(0,l.kt)("li",{parentName:"ol"},"Check after import is complete")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"wsl -l -v\n")),(0,l.kt)("ol",{start:7},(0,l.kt)("li",{parentName:"ol"},"Mark one of your WSL distribution as (default).")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"wsl -s Ubuntu\n")),(0,l.kt)("ol",{start:8},(0,l.kt)("li",{parentName:"ol"},"After exporting your default user will be set as root , to change it to your desired username, run following command")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"cd $env:USERPROFILE\\AppData\\Local\\Microsoft\\WindowsApps\nubuntu config --default-user ubuntu\n")),(0,l.kt)("ol",{start:9},(0,l.kt)("li",{parentName:"ol"},"Finally run wsl and you have successfully moved your WSL 2 installation to another drive.")),(0,l.kt)("h2",{id:"cheatsheet"},"Cheatsheet"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"# To list installed distributions\nwsl -l\nwsl --list\n\n# To list installed distributions along with its running status and wsl config being 1 or 2\nwsl -l --verbose\nwsl -l -v\n\n# To run a specific distro\nwsl -d distro_name\nwsl --distribution distro_name\n\n# To terminate/shutdown a specific distro\nwsl -t distro_name_to_shutdown\nwsl --terminate distro_name_to_shutdown\n\n# To shutdown all disstros\nwsl --shutdown\n\n# Set specific distro as default\nwsl -s my_default_distro\nwsl --set-default my_default_distro\n\n# To EXPORT a running distro as image\nwsl --export distro_name_to_export windows_path\\tar_file_name.tar\n\n# To IMPORT an image as distro\nwsl --import new_distro_name install_location_windows_path tar_file_name.tar --version wsl-version-1-or-2\nwsl --import Ubuntu-20 D:\\VMs\\WSL\\Ubuntu-20\\ Ubuntu-20.04.tar --version 2 # Setting my secondary HDD as storate loc for new distro\n\n# To UNREGISTER (also removes the its file storage) a distro\nwsl --unregister distro_name_that_delete\n\n# To run a WSL distro as the specified user.\nwsl -u username -d distroname\nwsl -u root -d Ubuntu-20.04\n\n# To change the default user for a distribution\ndistributionName config --default-user Username\nubuntu config --default-user my_default_username\nubuntu2004.exe config --default-user johndoe # When you have Ubuntu 20.04 version installed from the Microsoft Store\n")))}c.isMDXComponent=!0}}]);