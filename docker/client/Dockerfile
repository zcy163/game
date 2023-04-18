
FROM baiyudc/game-base:v1.0.0

ARG CONTAINER_HOMEWORK
ENV CONTAINER_HOMEWORK $CONTAINER_HOMEWORK

ARG COMPOSE_PROJECT_NAME
ENV COMPOSE_PROJECT_NAME $COMPOSE_PROJECT_NAME

# copy nginx conf template
COPY docker/client/nginx.conf.template $CONTAINER_HOMEWORK/deploy/nginx.conf.template
# 使用环境变量创建nginx conf文件
RUN envsubst '{{ $CONTAINER_HOMEWORK $COMPOSE_PROJECT_NAME }}' < $CONTAINER_HOMEWORK/deploy/nginx.conf.template > $CONTAINER_HOMEWORK/deploy/nginx.conf
RUN rm /etc/nginx/nginx.conf
RUN ln -s $CONTAINER_HOMEWORK/deploy/nginx.conf /etc/nginx/nginx.conf

COPY . $CONTAINER_HOMEWORK/$COMPOSE_PROJECT_NAME

# build
# RUN npm install
# RUN npm run build

# copy pages
RUN mkdir -p /usr/share/nginx/html/
COPY docker/client/40x.html /usr/share/nginx/html/40x.html
COPY docker/client/50x.html /usr/share/nginx/html/50x.html



