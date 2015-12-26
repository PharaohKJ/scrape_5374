FROM debian:jessie

ENV DEBIAN_FRONTEND noninteractive
RUN echo Asia/Tokyo > /etc/timezone
RUN dpkg-reconfigure --frontend noninteractive tzdata

# RUN echo Installation de Phantomjs
RUN apt-get update -y && apt-get install -y \
    build-essential g++ flex bison gperf ruby perl \
    libsqlite3-dev libfontconfig1-dev libicu-dev libfreetype6 libssl-dev \
    libpng-dev libjpeg-dev python libx11-dev libxext-dev

RUN apt-get install git -y

RUN git clone --recurse-submodules git://github.com/ariya/phantomjs.git && \
    cd phantomjs &&\
    ./build.py

RUN cd /phantomjs && make clean
RUN rm -rf /phantomjs/src
RUN ln -sf /phantomjs/bin/phantomjs /usr/local/bin/phantomjs

RUN apt-get install python -y

RUN git clone git://github.com/n1k0/casperjs.git
RUN cd casperjs && \
       git checkout 376d85fceb5eca63596e12e2ef6072a72422ed9b && \
       chmod +x /casperjs/bin/casperjs && \
       ln -sf /casperjs/bin/casperjs /usr/local/bin/casperjs

RUN apt-get install fonts-migmix -y

CMD phantomjs --version && casperjs --version
