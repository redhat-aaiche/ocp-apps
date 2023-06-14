FROM registry.access.redhat.com/ubi8/ubi:latest

RUN yum install -y httpd && \
    yum clean all && \
    sed -i -e 's/^Listen 80/Listen 8080/g' /etc/httpd/conf/httpd.conf && \
    chgrp -R 0 /var/log/httpd /var/run/httpd && \
    chmod -R g=u /var/log/httpd /var/run/httpd

VOLUME /var/www/html/

COPY index.html /var/www/html/

LABEL description="My httpd container application" \
      io.k8s.description="My httpd container application" \
      io.openshift.expose-services="8080:http" \
      io.openshift.tags="httpd, web server, apache, apache2"

EXPOSE 8080

USER 1001

ENTRYPOINT /usr/sbin/httpd -DFOREGROUND
