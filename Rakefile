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


# need to ~/.ssh/config to this
# Host github-scraped-5374
# User git
# Port 22
# HostName github.com
# IdentityFile ~/.ssh/pxw-bot-on-github
# TCPKeepAlive yes
# IdentitiesOnly yes
task :publish do
  unless File.exist?('_publish')
    sh 'mkdir -p _publish'
    cd '_publish' do
      sh 'git clone git@github-scraped-5374:pxw-bot/scraped-5374.git ./'
    end
  end
  sh "cp ./mnt/data/*.png ./_publish/"
  sh "cp ./mnt/data/*.json ./_publish/"
  cd '_publish/' do
    sh "git add ."
    sh "git commit -m '#{Time.now}'"
    sh "git push origin master"
  end
end
