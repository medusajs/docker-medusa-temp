FROM node:latest

# RUN apk add --no-cache \
# # git: gatsby new command depends on git
#     git \
# # util-linux: gatsby develop calls lscpu
# # openssl, sudo: gatsby develop --https uses
#     # util-linux openssl sudo \
# # node-sess version 4 uses g++ and still requires python2
# # see: https://github.com/sass/node-sass/issues/2877
#     python3 \
# # gatsby-plugin-sharp depends on imagemin-mozjpeg,
# # imagemin-mozjpeg depends on mozjpeg,
# # mozjpeg requires compiling from source with autoreconf, automake, libtool, gcc, make, musl-dev, file, pkgconfig, nasm
# # see: https://pkgs.alpinelinux.org/contents?page=1&file=autoreconf
# # see: https://github.com/buffer/pylibemu/issues/24#issuecomment-492759639
# # see: https://github.com/maxmind/libmaxminddb/issues/9#issuecomment-30836272
# # see: https://stackoverflow.com/questions/28631817/no-acceptable-c-compiler-found-in-path/57419374#57419374
# # see: https://pkgs.alpinelinux.org/contents?branch=v3.3&name=file&arch=x86&repo=main
# # see: https://stackoverflow.com/questions/17089858/pkg-config-pkg-prog-pkg-config-command-not-found/17106579#17106579
# # see: https://github.com/alicevision/AliceVision/issues/593#issuecomment-457194176
#     autoconf automake libtool gcc make musl-dev file pkgconfig nasm \
# # sharp depends on vips
# # see: https://github.com/lovell/sharp/issues/773
#     vips

WORKDIR /app/admin

COPY ["package.json", "package-lock.json", "./"]

RUN apt-get update

# RUN apt-get install -y libvips-dev libglib2.0-dev gcc g++ make
# RUN apt-get install -y libvips-dev libglib2.0-dev fftw-dev g++ make autoconf automake \
#                        libtool gcc make musl-dev file nasm

RUN npm install -g npm@latest

RUN npm install sharp

RUN npm install -g gatsby-cli

RUN npm install --loglevel=error

# copy the whole source folder(the dir is relative to the Dockerfile
COPY . .

RUN npm run build &> /dev/null

CMD [ "gatsby", "develop", "-H", "0.0.0.0",  "-p", "7000" ]