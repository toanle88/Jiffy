---
title: Terraform
tags: [devops, iac, infrastructure]
---

# Terraform Cheatsheet

## 🏁 Basic Workflow

| Command | Description |
|---------|-------------|
| `terraform init` | Initialize a new or existing working directory |
| `terraform plan` | Generate and show an execution plan |
| `terraform apply` | Builds or changes infrastructure |
| `terraform apply -auto-approve` | Apply changes without asking for approval |
| `terraform destroy` | Destroy Terraform-managed infrastructure |

## 💾 State Management

| Command | Description |
|---------|-------------|
| `terraform state list` | List resources in the state |
| `terraform state show <resource>` | Show details of a resource in the state |
| `terraform state mv <src> <dest>` | Move an item in the state |
| `terraform state rm <resource>` | Remove instances from the state |
| `terraform refresh` | Update local state file against real resources |

## 🏗️ Workspaces

| Command | Description |
|---------|-------------|
| `terraform workspace list` | List all workspaces |
| `terraform workspace new <name>` | Create a new workspace |
| `terraform workspace select <name>` | Switch to another workspace |
| `terraform workspace show` | Show the name of the current workspace |
| `terraform workspace delete <name>` | Delete a workspace |

## 🛠️ Formatting & Validation

| Command | Description |
|---------|-------------|
| `terraform fmt` | Rewrites config files to canonical format |
| `terraform fmt -recursive` | Format files in subdirectories |
| `terraform validate` | Validates the configuration files |

## 🔌 Taint & Untaint

| Command | Description |
|---------|-------------|
| `terraform taint <resource>` | Mark a resource for recreation |
| `terraform untaint <resource>` | Unmark a tainted resource |

## 📤 Outputs

| Command | Description |
|---------|-------------|
| `terraform output` | Show all outputs |
| `terraform output <name>` | Show a specific output |
| `terraform output -json` | Show outputs in JSON format |

---
*Created for Infrastructure as Code*
