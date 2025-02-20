-- CreateTable
CREATE TABLE "CreateProject" (
    "id" SERIAL NOT NULL,
    "name_project" TEXT NOT NULL,
    "name_technology" TEXT NOT NULL,
    "project_link" TEXT NOT NULL,
    "project_file" TEXT NOT NULL,

    CONSTRAINT "CreateProject_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CreateUser" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "CreateUser_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "CreateUser_email_key" ON "CreateUser"("email");
