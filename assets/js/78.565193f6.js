(window.webpackJsonp=window.webpackJsonp||[]).push([[78],{656:function(t,e,a){"use strict";a.r(e);var s=a(0),n=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[t._v("In this section we will explain how to join testnets, where to find testnet configurations and some scripts to make the process faster.")]),t._v(" "),a("h2",{attrs:{id:"select-your-network"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#select-your-network"}},[t._v("#")]),t._v(" Select Your Network")]),t._v(" "),a("p",[t._v("You can find active and in-active testnet information such as configs and endpoints on "),a("a",{attrs:{href:"https://github.com/CosmWasm/testnets",target:"_blank",rel:"noopener noreferrer"}},[t._v("CosmWasm/testnets"),a("OutboundLink")],1),t._v(".")]),t._v(" "),a("h2",{attrs:{id:"setup"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#setup"}},[t._v("#")]),t._v(" Setup")]),t._v(" "),a("p",[t._v("Let's start rolling your node and start producing blocks in testnet environment.")]),t._v(" "),a("p",[t._v("First of all make sure you followed the installation steps in "),a("RouterLink",{attrs:{to:"/testnets/build-requirements.html"}},[t._v("build requirements section")]),t._v(". You should have the required binaries. If you just want to copy and execute the scripts below, make sure to set up environment variables:")],1),t._v(" "),a("p",[t._v("Below is the "),a("a",{attrs:{href:"https://github.com/CosmWasm/testnets/tree/master/coralnet",target:"_blank",rel:"noopener noreferrer"}},[t._v("coralnet configuration"),a("OutboundLink")],1),t._v(".")]),t._v(" "),a("code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"ZXhwb3J0IENIQUlOX0lEPSZxdW90O2Nvc213YXNtLWNvcmFsJnF1b3Q7CmV4cG9ydCBURVNUTkVUX05BTUU9JnF1b3Q7Y29yYWxuZXQmcXVvdDsKZXhwb3J0IFdBU01EX1ZFUlNJT049JnF1b3Q7djAuMTAuMCZxdW90OwpleHBvcnQgQ09ORklHX0RJUj0mcXVvdDsuY29yYWxkJnF1b3Q7CmV4cG9ydCBCSU5BUlk9JnF1b3Q7Y29yYWxkJnF1b3Q7CmV4cG9ydCBDTElfQklOQVJZPSZxdW90O2NvcmFsJnF1b3Q7CgpleHBvcnQgQ09TTUpTX1ZFUlNJT049JnF1b3Q7djAuMjIuMSZxdW90OwpleHBvcnQgR0VORVNJU19VUkw9JnF1b3Q7aHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL0Nvc21XYXNtL3Rlc3RuZXRzL21hc3Rlci9jb3JhbG5ldC9jb25maWcvZ2VuZXNpcy5qc29uJnF1b3Q7CgpleHBvcnQgUlBDPSZxdW90O2h0dHBzOi8vcnBjLmNvcmFsbmV0LmNvc213YXNtLmNvbTo0NDMmcXVvdDsKZXhwb3J0IExDRD0mcXVvdDtodHRwczovL2xjZC5jb3JhbG5ldC5jb3Ntd2FzbS5jb20mcXVvdDsKZXhwb3J0IEZBVUNFVD0mcXVvdDtodHRwczovL2ZhdWNldC5jb3JhbG5ldC5jb3Ntd2FzbS5jb20mcXVvdDsKZXhwb3J0IFNFRURfTk9ERT0mcXVvdDtlYzQ4OGM5MjE1ZTE5MTdlNDFiY2U1ZWY0YjUzZDM5ZmY2ODA1MTY2QDE5NS4yMDEuODguOToyNjY1NiZxdW90Owo="}}),t._v(" "),a("p",[a("strong",[t._v("IMPORTANT")]),t._v(":")]),t._v(" "),a("blockquote",[a("p",[t._v("We have setup different executables for each testnet names after network names like: "),a("code",[t._v("corald/coral")]),t._v(", "),a("code",[t._v("gaiaflexd/gaiaflex")]),t._v("\nWe will be using "),a("code",[t._v("coral")]),t._v(" and "),a("code",[t._v("corald")]),t._v(" network specific executables during this tutorial.")])]),t._v(" "),a("p",[t._v("For running these scripts seamlessly, We recommend you to create a directory for CosmWasm tooling:\n"),a("code",[t._v("mkdir CosmWasm && cd CosmWasm && export CW_DIR=$(pwd)")])]),t._v(" "),a("code-block",{staticClass:"codeblock",attrs:{language:"shell script",base64:"Y2QgJENXX0RJUgpnaXQgY2xvbmUgaHR0cHM6Ly9naXRodWIuY29tL0Nvc21XYXNtL3dhc21kCmNkIHdhc21kCiMgQ2hlY2sgd2hpY2ggdmVyc2lvbiB0byB1c2Ugb24gdGVzdG5ldHMgcmVwbwpnaXQgY2hlY2tvdXQgJFdBU01EX1ZFUlNJT04KIyBnZW5lcmF0ZSBjb3JhbCBleGVjdXRhYmxlcwptYWtlIGJ1aWxkLWNvcmFsICMgbWFrZSBidWlsZC1nYWlhZmxleCwgbWFrZSBidWlsZCBldGMuLi4KIyBhZGQgdGhlIGV4ZWN1dGFibGVzIHRvIHBhdGgKZXhwb3J0IFBBVEg9JnF1b3Q7JHtQQVRIfTokKHB3ZCkvYnVpbGQmcXVvdDsK"}}),t._v(" "),a("h2",{attrs:{id:"initialize-your-wallet"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#initialize-your-wallet"}},[t._v("#")]),t._v(" Initialize Your Wallet")]),t._v(" "),a("p",[t._v("Initialize "),a("code",[t._v("coral")]),t._v(" and generate validator account:")]),t._v(" "),a("code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"Y29yYWwgY29uZmlnIGNoYWluLWlkICRDSEFJTl9JRApjb3JhbCBjb25maWcgdHJ1c3Qtbm9kZSB0cnVlCmNvcmFsIGNvbmZpZyBub2RlICRSUEMKY29yYWwgY29uZmlnIG91dHB1dCBqc29uCmNvcmFsIGNvbmZpZyBpbmRlbnQgdHJ1ZQojIHRoaXMgaXMgaW1wb3J0YW50LCBzbyB0aGUgY2xpIHJldHVybnMgYWZ0ZXIgdGhlIHR4IGlzIGluIGEgYmxvY2ssCiMgYW5kIHN1YnNlcXVlbnQgcXVlcmllcyByZXR1cm4gdGhlIHByb3BlciByZXN1bHRzCmNvcmFsIGNvbmZpZyBicm9hZGNhc3QtbW9kZSBibG9jawoKIyBjaGVjayB5b3UgY2FuIGNvbm5lY3QKY29yYWwgcXVlcnkgc3VwcGx5IHRvdGFsCmNvcmFsIHF1ZXJ5IHN0YWtpbmcgdmFsaWRhdG9ycwpjb3JhbCBxdWVyeSB3YXNtIGxpc3QtY29kZQoKIyBjcmVhdGUgd2FsbGV0CmNvcmFsIGtleXMgYWRkIG15d2FsbGV0Cg=="}}),t._v(" "),a("h2",{attrs:{id:"joining-live-testnets"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#joining-live-testnets"}},[t._v("#")]),t._v(" Joining Live Testnets")]),t._v(" "),a("h3",{attrs:{id:"run-corald-node"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#run-corald-node"}},[t._v("#")]),t._v(" Run corald Node")]),t._v(" "),a("code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"ZXhwb3J0IE1PTklLRVI9bmV3X3ZhbGlkYXRvcgojIGluaXRpYWxpemUgY29yYWxkIGNvbmZpZ3VyYXRpb24KY29yYWxkIGluaXQgJE1PTklLRVIKIyBnZXQgdGhlIHRlc3RuZXRzIGdlbmVzaXMgZmlsZQpjdXJsICRSUEMvZ2VuZXNpcyB8IGpxIC5yZXN1bHQuZ2VuZXNpcyAmZ3Q7IH4vLmNvcmFsZC9jb25maWcvZ2VuZXNpcy5qc29uCiMgWW91IG5lZWQgdG8gY29uZmlndXJlIHAycCBzZWVkcwojIEVpdGhlciB5b3UgY2FuIGluc2VydCB0aGUgc2VlZCBhZGRyZXNzZXMgaW4gJEhPTUVESVIvLmNvcmFsZC9jb25maWcvY29uZmlnLnRvbWwgdG8gJnF1b3Q7c2VlZHMmcXVvdDsKIyBGb3Igc2ltcGxpY2l0eSB3ZSB3aWxsIHBhc3MgdGhlIHNlZWQgSUQgYW5kIGRvbWFpbiBhcyBhcmd1bWVudAojIFlvdSBjYW4gZ2V0IHRoZSBzZWVkIGl0IHVzaW5nIGNvbW1hbmQ6CiMjIFN0YXJ0IGNvcmFsZApjb3JhbGQgc3RhcnQgLS1wMnAuc2VlZHMgJFNFRURfTk9ERQo="}}),t._v(" "),a("p",[t._v("Now you should be seeing blocks being replayed and your node is catching up with the testnet. This could take a while.")]),t._v(" "),a("h3",{attrs:{id:"become-an-active-validator-optional"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#become-an-active-validator-optional"}},[t._v("#")]),t._v(" Become An Active Validator(optional)")]),t._v(" "),a("p",[t._v("In order to join the network as validator, you need some staking tokens.\nPlease ask some in "),a("a",{attrs:{href:"https://docs.cosmwasm.com/chat",target:"_blank",rel:"noopener noreferrer"}},[t._v("discord testnets channel"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("If you want to participate in active block building, you need some coins staked to your validators address. If you are interested in validator tech stack, "),a("a",{attrs:{href:"https://kb.certus.one/",target:"_blank",rel:"noopener noreferrer"}},[t._v("certus one blog"),a("OutboundLink")],1),t._v(" is a good resource to begin with.")]),t._v(" "),a("p",[a("strong",[t._v("Note")]),t._v(": make sure your validator is synced before upgrading to validator")]),t._v(" "),a("code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"Y29yYWwgdHggc3Rha2luZyBjcmVhdGUtdmFsaWRhdG9yIFwKICAtLWFtb3VudD0xMDAwMDAwMDB1cmVlZiBcCiAgLS1wdWJrZXk9JChjb3JhbGQgdGVuZGVybWludCBzaG93LXZhbGlkYXRvcikgXAogIC0tbW9uaWtlcj0kTU9OSUtFUiBcCiAgLS1jaGFpbi1pZD1jb3Ntd2FzbS1jb3JhbCBcCiAgLS1jb21taXNzaW9uLXJhdGU9JnF1b3Q7MC4xMCZxdW90OyBcCiAgLS1jb21taXNzaW9uLW1heC1yYXRlPSZxdW90OzAuMjAmcXVvdDsgXAogIC0tY29tbWlzc2lvbi1tYXgtY2hhbmdlLXJhdGU9JnF1b3Q7MC4wMSZxdW90OyBcCiAgLS1taW4tc2VsZi1kZWxlZ2F0aW9uPSZxdW90OzEmcXVvdDsgXAogIC0tZ2FzPSZxdW90O2F1dG8mcXVvdDsgXAogIC0tZ2FzLWFkanVzdG1lbnQ9JnF1b3Q7MS4xJnF1b3Q7IFwKICAtLWZyb209bXl3YWxsZXQK"}}),t._v(" "),a("h3",{attrs:{id:"run-the-light-client-daemon"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#run-the-light-client-daemon"}},[t._v("#")]),t._v(" Run the Light Client Daemon")]),t._v(" "),a("code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"Y29yYWwgcmVzdC1zZXJ2ZXIKIyBpZiB0aGUgbm9kZSBpcyBydW5uaW5nIG9uIGFub3RoZXIgbWFjaGluZSB1c2U6CmNvcmFsIHJlc3Qtc2VydmVyIC0tbm9kZSB0Y3A6Ly8mbHQ7aG9zdCZndDs6Jmx0O3BvcnQmZ3Q7Cg=="}}),t._v(" "),a("h2",{attrs:{id:"joining-to-be-launched-testnets"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#joining-to-be-launched-testnets"}},[t._v("#")]),t._v(" Joining To Be Launched Testnets")]),t._v(" "),a("p",[t._v("You need to have your address and informations defined in networks genesis file to join not yet launched testnets.\nHere is the script you can run to take care of it automatically. It uses "),a("code",[t._v("coral")]),t._v(" "),a("a",{attrs:{href:"https://github.com/CosmWasm/testnets/tree/master/coralnet",target:"_blank",rel:"noopener noreferrer"}},[t._v("network specific executables"),a("OutboundLink")],1),t._v(":")]),t._v(" "),a("code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"Y2QgJENXX0RJUgojIyBGb3JrIGdpdGh1Yi5jb206Q29zbVdhc20vdGVzdG5ldHMgdG8geW91ciBhY2NvdW50IGFuZCBjbG9uZS4KIyMgWW91IGNhbm5vdCBwdXNoIGRpcmVjdGx5IHRvIENvc21XYXNtL3Rlc3RuZXRzIHJlcG8KZ2l0IGNsb25lIGdpdEBnaXRodWIuY29tOiZsdDt5b3VyLW5hbWUmZ3Q7L3Rlc3RuZXRzCmNkIHRlc3RuZXRzCmdpdCBjaGVja291dCAtYiBhZGQtZ2VuLWFjYy0mbHQ7dmFsaWRhdG9yLW5hbWUmZ3Q7CmNkICRURVNUTkVUX05BTUUKCmNvcmFsIGtleXMgYWRkIHZhbGlkYXRvcgpjb3JhbGQgYWRkLWdlbmVzaXMtYWNjb3VudCAtLWhvbWUgLiAkKGNvcmFsIGtleXMgc2hvdyAtYSB2YWxpZGF0b3IpIDEwMDAwMDAwMHVzaGVsbCwxMDAwMDAwMDB1cmVlZgojIHBsZWFzZSBzb3J0IHRoZSBnZW5lc2lzIGZpbGUsIHNvIHRoZSBkaWZmIG1ha2VzIHNlbnNlClNPUlRFRD0kKGpxIC1TIC4gJmx0OyAuL2NvbmZpZy9nZW5lc2lzLmpzb24pICZhbXA7JmFtcDsgZWNobyAmcXVvdDskU09SVEVEJnF1b3Q7ICZndDsgLi9jb25maWcvZ2VuZXNpcy5qc29uCgpnaXQgYWRkIC4vY29uZmlnL2dlbmVzaXMuanNvbgpnaXQgY29tbWl0IC1tICZxdW90O0FkZCAmbHQ7bXl2YWxpZGF0b3ImZ3Q7IGFjY291bnQgdG8gY29yYWwgZ2VuZXNpcyZxdW90OwpnaXQgcHVzaAoKIyBPcGVuIFBSIHRvIENvc21XYXNtL3Rlc3RuZXRzOm1hc3RlciAoaHR0cHM6Ly9naXRodWIuY29tL0Nvc21XYXNtL3Rlc3RuZXRzKQo="}}),t._v(" "),a("p",[t._v("After the network is launched you can follow "),a("a",{attrs:{href:"#joining-live-testnets"}},[t._v("Joining Live Testnets")]),t._v(".")]),t._v(" "),a("h2",{attrs:{id:"deploying-contracts-to-testnet"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#deploying-contracts-to-testnet"}},[t._v("#")]),t._v(" Deploying Contracts to Testnet")]),t._v(" "),a("p",[a("RouterLink",{attrs:{to:"/getting-started/intro.html"}},[t._v("Getting Started section")]),t._v(" is the best reading source that teaches you the process of compiling and deploying contracts using a basic smart contract. If you are interested in developing your own contracts, after reading getting started tutorials head to "),a("RouterLink",{attrs:{to:"/learn/hijack-escrow/intro.html"}},[t._v("Hijacking Escrow")]),t._v(" where you play around with the example escrow contract.")],1)],1)}),[],!1,null,null,null);e.default=n.exports}}]);