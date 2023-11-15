"use server";

import { botService } from "@/services/bot";
import { EditBotFormType, NewBotFormType } from "@/services/schemas";
import { redirect } from "next/navigation";

export const newBotAction = async (data: NewBotFormType) => {
  const bot = await botService.createBot(data);
  return redirect(`/${bot.slug}`);
};

export const editBotAction = async (botId: string, data: EditBotFormType) => {
  await botService.editBot(botId, data);
};
