import mongoose from "mongoose";
import { Contact } from "../types.ts";
const Schema = mongoose.Schema;

const ContactSchema = new Schema({
  name: { type: String, required: true },
  phone: { type: String, required: true, unique: true },
  country: { type: String, required: true },
  capital: { type: String, required: true },
  //como el time lo sacamos metemos solo la capi que no cambia y el time si
});

export type ContactModelType =
  & mongoose.Document
  & Omit<Contact, "id" | "time"> //omitimos las variables que no habia en el types
  & {
    capital: string; //añadimos la var nueva para sacar en este caso el time
  };

export const ContactModel = mongoose.model<ContactModelType>(
  "Contact",
  ContactSchema,
);
