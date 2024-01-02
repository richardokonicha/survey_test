variable aws_region {
  default     = "eu-north-1"
  type        = string
  description = "AWS Region for all resources"
}

variable repository {
  default     = "survey"
  type        = string
  description = "Name of the repository"
}
