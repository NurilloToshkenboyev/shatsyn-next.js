"use client";

import { useState, useEffect } from "react";
import { TrendingUp } from "lucide-react";
import { Pie, PieChart, Tooltip, Cell } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export const description = "Statistikalarni ko'rsatuvchi aylana diagrammasi";

const chartData = [
  { name: "January", value: 186 + 80 },
  { name: "February", value: 305 + 200 },
  { name: "March", value: 237 + 120 },
  { name: "April", value: 73 + 190 },
  { name: "May", value: 209 + 130 },
  { name: "June", value: 214 + 140 },
];

const COLORS = ["hsl(var(--chart-1))", "hsl(var(--chart-2))"];

export function Component() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null; 
  }

  const desktopTotal = chartData.reduce((acc, curr) => acc + curr.value / 2, 0);
  const mobileTotal = chartData.reduce((acc, curr) => acc + curr.value / 2, 0);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Tashrifchilar bo'yicha yumaloq diagramma</CardTitle>
        <CardDescription>Yil davomidagi tovarlar sotilish foizlari</CardDescription>
      </CardHeader>
      <CardContent className="flex justify-between">

        <div>
          <PieChart width={400} height={400}>
            <Pie
              data={chartData}
              cx="50%"
              cy="50%"
              outerRadius={120}
              fill="#8884d8"
              dataKey="value"
              labelLine={false}
              label={({ name, value }) => `${name}: ${value}`}
            >
              {chartData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </div>

        <div className="ml-8 flex flex-col justify-center">
          <div className="mb-4">
            <span className="font-bold text-lg">Desktop:</span> {desktopTotal} tashrifchi
          </div>
          <div>
            <span className="font-bold text-lg">Mobile:</span> {mobileTotal} tashrifchi
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 font-medium leading-none">
          Bu oy 5.2% o'sish kuzatildi <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          So'nggi 6 oy uchun uchun sotuvlar foizi
        </div>
      </CardFooter>
    </Card>
  );
}
