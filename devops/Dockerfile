FROM nginx:alpine

VOLUME /var/cache/nginx

COPY devops/nginx.conf /etc/nginx/conf.d/default.conf

RUN rm -rf /usr/share/nginx/html/*
COPY dist/qbo-angular-course /usr/share/nginx/html

CMD ["nginx", "-g", "daemon off;"]

# docker build -f devops/Dockerfile -t qbo-angular-course .
# docker run -p 8000:80 qbo-angular-course
