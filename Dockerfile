FROM node:10

# Create working directory
RUN mkdir -p /usr/local/app
WORKDIR /usr/local/app 

# Copy app files to wrkdir
COPY index.js /usr/local/app

# Expose app
EXPOSE 9000
CMD ["node", "index.js"]
