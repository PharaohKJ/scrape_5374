# Docker image build

``` shell-session
$ cd docker
$ docker build -t pharaohkj/phantomcasper ./
```


# Run command sample

``` shell-session
$ docker run -v `pwd`/mnt:/mnt  pharaohkj/phantomcasper casperjs /mnt/capture-5374.js --local-storage-path=/mnt
```

