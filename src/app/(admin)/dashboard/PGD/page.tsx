"use client";

import { Button } from "@/components/ui/button";
import { CreateOEG } from "@/components/create-OEG";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";

const PGDs: { title: string; description: string; content: string }[] = [
  {
    title: "OEG 1",
    description: "OBJETIVO ESTRATÉGICO GENERAL 1",
    content:
      "Las estadísticas responden a las políticas públicas sectoriales y de Estado.",
  },
  {
    title: "OEG 2",
    description: "OBJETIVO ESTRATÉGICO GENERAL 2",
    content:
      "Se produce información estadística confiable y oportuna para el diseño, monitoreo y evaluación de los programas presupuestales.",
  },
  {
    title: "OEG 3",
    description: "OBJETIVO ESTRATÉGICO GENERAL 3",
    content:
      "Se produce información estadística que atiende los requerimientos de los compromisos internacionales del país.",
  },
  {
    title: "OEG 4",
    description: "OBJETIVO ESTRATÉGICO GENERAL 4",
    content: "El país cuenta con infraestructura estadística actualizada.",
  },
  {
    title: "OEG 5",
    description: "OBJETIVO ESTRATÉGICO GENERAL 5",
    content:
      "El SEN alcanza estándares de calidad internacional en la producción de la información estadística oficial.",
  },
  {
    title: "OEG 6",
    description: "OBJETIVO ESTRATÉGICO GENERAL 6",
    content:
      "El SEN se ha Fortalecido para Responder a los Nuevos Retos del País y de la Actividad Estadística Mundial.",
  },
];

export default function PGDPage() {
  return (
    <>
      <div className="hidden flex-col md:flex">
        <div className="flex-1 space-y-4 pt-6 p-8">
          <div className="flex items-center justify-between space-y-2">
            <h2 className="text-3xl font-bold tracking-tight">
              Plan de gobierno digital - PGD
            </h2>
            <CreateOEG />
          </div>
          <div className="grid gap-6 md:grid-cols-3 lg:grid-cols-4 ">
            {PGDs.map((item) => (
              <Card
                className="h-full w-full max-w-2xl flex flex-col"
                key={item.content}
              >
                <CardHeader>
                  <CardTitle>{item.title}</CardTitle>
                  <CardDescription>{item.description}</CardDescription>
                </CardHeader>
                <CardContent>{item.content}</CardContent>
                <CardFooter className="mt-auto">
                  <Button className="w-full">Vizualizar PENDES</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
