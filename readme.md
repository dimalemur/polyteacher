# Проект "Polyteacher"

## Для разработчиков

  <blockquote>Внимание! Если вы уже выполняли следующие шаги, то для продолжения разработки вам требуется выполнить только <b>5 шаг</b>  </blockquote> 

  1) ### Клонируем репозиторий
      В терминале пишем команду:    
      ```sh
      git clone https://github.com/dimalemur/polyteacher.git
      ```
      <blockquote>Примечание! Eсли разраработка ведется на Windows, необходимо установить git и вписать команду в терминал Git Bash  </blockquote> 
      
      [Инструкция по установке Git](https://git-scm.com/book/ru/v2/%D0%92%D0%B2%D0%B5%D0%B4%D0%B5%D0%BD%D0%B8%D0%B5-%D0%A3%D1%81%D1%82%D0%B0%D0%BD%D0%BE%D0%B2%D0%BA%D0%B0-Git)
      
  </br>

  2) ### Скачиваем и устанавливаем docker и docker-compose
      [Инструкция по установке docker](https://www.digitalocean.com/community/tutorials/docker-ubuntu-18-04-1-ru)
      
      [Инструкция по установке docker compose](https://www.digitalocean.com/community/tutorials/how-to-install-docker-compose-on-ubuntu-18-04-ru)
  </br>

  3) ### Скачиваем зависимости
      Открываем каталог с проектом терминале и пишем:
        ```sh
        npm install
      ```

  4) ### Создаем образ с приложением в docker
        В терминале (в корне проекта) пишем:
        ```sh
        sudo docker build -t polyteacher .
      ```

  5) ### Запускаем приложение
        В терминале (в корне проекта) пишем:
        ```sh
        sudo docker-compose up -d
      ```

  6) ### Результат
        Сервер запускается на 3000 порту локального хоста. </br> 
        Переходим  по http://127.0.0.1:3000/

        p.s. так как регистрация у нас не предусмотрена, сейчас она просходит по POST запросу. Для этого понадобится программа postman.




