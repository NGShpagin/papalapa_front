packer {
  required_plugins {
    yandex = {
      version = "~> 1"
      source  = "github.com/hashicorp/yandex"
    }
  }
}

source "yandex" "ubuntu-nginx" {
  token               = "y0__wgBEILmtYIHGMHdEyCp4YX5EdGqiVTgIg6li5AgZogVWAAT8D5K"
  folder_id           = "b1gl9pp1jhv1pqeumpf0"
  source_image_family = "ubuntu-2004-lts"
  ssh_username        = "ubuntu"
  use_ipv4_nat        = "true"
  image_description   = "my custom ubuntu with nginx"
  image_family        = "ubuntu-2004-lts"
  image_name          = "my-ubuntu-nginx"
  subnet_id           = "e9b8uf2haj6te7r84ss0"
  disk_type           = "network-ssd"
  zone                = "ru-central1-a"
}

build {
  sources = [
    "source.yandex.ubuntu-nginx"
  ]

  provisioner "shell" {
    inline = [
      "sudo apt-get update -y",
      "sudo apt-get install -y nginx",
      "sudo systemctl enable nginx.service"
    ]
  }
}