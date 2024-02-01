import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface DSCONTAINERAttributes {
    LID: number;
}

@Table({
	tableName: "DSCONTAINER",
	timestamps: false 
})
export class DSCONTAINER extends Model<DSCONTAINERAttributes, DSCONTAINERAttributes> implements DSCONTAINERAttributes {

    @Column({
    	primaryKey: true,
    	type: DataType.INTEGER 
    })
    	LID!: number;

}