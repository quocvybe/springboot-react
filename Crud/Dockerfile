# Stage 1: build
# Start with a Maven image that includes JDK 17
# tạo một máy ảo như máy của bạn : vd : cần có java jdk và maven
FROM maven:3.9.9-amazoncorretto-17 AS build

# Copy source code and pom.xml file to /app folder
# copy các file cần thiết để build được image : vd có file pom.xml và file src ./src
WORKDIR /app
COPY pom.xml .
COPY src ./src

# Build source code with maven
# dùng để tạo file jar
RUN mvn package -DskipTests

#Stage 2: create image
# Start with Amazon Correto JDK 17
# lấy một cái image khác để đóng gói ứng dụng của chúng ta : vd :amazoncorretto:17.0.12
# cái image đóng gói này chỉ ccần có java và jdk không cần maven
FROM amazoncorretto:17.0.12

# Set working folder to App and copy complied file from above step
#copy cái image của chúng ta vào file app và đổi tên thành app.jar
WORKDIR /app
COPY --from=build /app/target/*.jar app.jar

# Command to run the application
# hướng dẫn cho máy chạy  1 file jar bình thường
ENTRYPOINT ["java", "-jar", "app.jar"]
