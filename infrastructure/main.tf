provider "aws" {
  region = var.aws_region
}

data "aws_caller_identity" "current" {}

resource "random_pet" "lambda_bucket_name" {
  prefix = var.repository
  length = 4
}

resource "aws_ecr_repository" "private_repository" {
  name = var.repository
}

output "repository_url" {
  value = aws_ecr_repository.private_repository.repository_url
}
