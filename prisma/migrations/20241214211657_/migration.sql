-- CreateTable
CREATE TABLE "CreateProject" (
    "id" SERIAL NOT NULL,
    "name_project" TEXT NOT NULL,
    "name_technology" TEXT NOT NULL,
    "project_link" TEXT NOT NULL,
    "project_image" TEXT NOT NULL,

    CONSTRAINT "CreateProject_pkey" PRIMARY KEY ("id")
);
