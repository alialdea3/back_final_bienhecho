import { GraphQLError } from "graphql";
import { ContactModelType } from "../db/contact.ts";
import {
  getInformationFromCapital,
  getInformationFromCoordenates,
} from "../lib/functions.ts";

export const Contact = {
  time: async (parent: ContactModelType): Promise<string> => {
    try {
      const capitalInfo = await getInformationFromCapital(parent.capital);
      const latt = capitalInfo.latt;
      const longt = capitalInfo.longt;

      const coordenatesInfo = await getInformationFromCoordenates(longt, latt);
      return coordenatesInfo.datetime;
    } catch (err) {
      console.log(err);
      throw new GraphQLError(err);
    }
  },
};
