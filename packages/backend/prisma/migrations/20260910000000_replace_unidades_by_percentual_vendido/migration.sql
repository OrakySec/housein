-- AlterTable
ALTER TABLE "Empreendimento" ADD COLUMN "percentual_vendido" INTEGER;
ALTER TABLE "Empreendimento" DROP COLUMN "total_unidades";
ALTER TABLE "Empreendimento" DROP COLUMN "unidades_disponiveis";
