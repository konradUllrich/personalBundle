import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface DSROLEAttributes {
    LID: number;
}

@Table({
	tableName: "DSROLE",
	timestamps: false 
})
export class DSROLE extends Model<DSROLEAttributes, DSROLEAttributes> implements DSROLEAttributes {

    @Column({
    	primaryKey: true,
    	type: DataType.INTEGER 
    })
    	LID!: number;

}