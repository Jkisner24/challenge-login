FROM openjdk:17-slim as builder
WORKDIR /app
RUN apt-get update && apt-get install -y maven
COPY . .
RUN mvn clean package -DskipTests

FROM openjdk:17-slim
WORKDIR /app
COPY --from=builder /app/target/app-0.0.1-SNAPSHOT.jar /app/app.jar
COPY wait-for-it.sh /wait-for-it.sh
RUN apt-get update && apt-get install -y default-mysql-client
RUN sed -i 's/\r$//' /wait-for-it.sh && chmod +x /wait-for-it.sh
RUN apt-get update && apt-get install -y bash
EXPOSE 8080
CMD /wait-for-it.sh db -- java -jar app.jar