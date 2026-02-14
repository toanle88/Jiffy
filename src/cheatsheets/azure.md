---
title: Azure CLI
tags: [cloud, azure, devops, microsoft]
---

# Azure CLI Cheatsheet

## 🔑 Authentication & Config

| Command | Description |
|---------|-------------|
| `az login` | Log in to Azure |
| `az account list --output table` | List available subscriptions |
| `az account set --subscription <id>` | Set active subscription |
| `az configure --defaults group=<name>` | Set default resource group |
| `az configure --defaults location=<loc>` | Set default location (e.g., eastus) |

## 📦 Resource Groups

| Command | Description |
|---------|-------------|
| `az group list --output table` | List resource groups |
| `az group create --name <n> --location <l>` | Create a resource group |
| `az group show --name <name>` | Show resource group details |
| `az group delete --name <name>` | Delete a resource group |

## 💻 Virtual Machines

| Command | Description |
|---------|-------------|
| `az vm list --output table` | List virtual machines |
| `az vm create -n <n> -g <g> --image <i>` | Create a VM (UbuntuLTS, Win2019Datacenter) |
| `az vm start --name <name> -g <group>` | Start a VM |
| `az vm stop --name <name> -g <group>` | Stop a VM |
| `az vm open-port -n <n> -g <g> --port <p>` | Open a port on a VM |

## 🌐 App Service (Web Apps)

| Command | Description |
|---------|-------------|
| `az webapp list --output table` | List web apps |
| `az appservice plan create -n <n> -g <g>` | Create an App Service plan |
| `az webapp create -n <n> -g <g> -p <plan>` | Create a Web App |
| `az webapp log tail -n <name> -g <group>` | Stream logs from Web App |

## 💾 Storage

| Command | Description |
|---------|-------------|
| `az storage account list` | List storage accounts |
| `az storage account create -n <n> -g <g>` | Create storage account |
| `az storage container create -n <n>` | Create a blob container |
| `az storage blob upload -f <file> -c <cont> -n <n>` | Upload file to blob storage |

---
*Cloud computing at your fingertips*
