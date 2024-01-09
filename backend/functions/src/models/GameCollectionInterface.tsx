import { ObjectId } from "mongodb";

export default interface gameCollectionInterface {
    _id?: ObjectId;
    Platform: string;
    Owned: number;
    Title: string;
    Publisher: string;
    Developer: string;
    DateAdded: string;
    Ownership: string;
    PriceLoose: number;
    PriceCIB: number;
    PriceNew: number;
    YourPrice: number;
    ItemCondition: string;
    BoxCondition: string;
    ManualCondition: string;
    Beat: string;
    PlayedCompletion: string;
}