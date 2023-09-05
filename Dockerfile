FROM postgres:latest

ENV POSTGRES_DB=mydb
ENV POSTGRES_USER=myuser
ENV POSTGRES_PASSWORD=mypassword

EXPOSE 5432
COPY ./db/init.sql /docker-entrypoint-initdb.d/

CMD ["postgres"]
