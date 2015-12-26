OWNER          = 'pharaohkj'
CONTAINER_NAME = 'phantomcasper'
NAME           = [OWNER, CONTAINER_NAME].join('/')

namespace :docker do
  task :build do
    cd 'docker' do
      sh "docker build -t #{NAME} ./"
    end
  end
end

task :run do
  sh "docker run -v `pwd`/mnt:/mnt #{NAME} casperjs /mnt/capture-5374.js --local-storage-path=/mnt/data"
end
