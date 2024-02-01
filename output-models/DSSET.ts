import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface DSSETAttributes {
    LID: number;
}

@Table({
	tableName: "DSSET",
	timestamps: false 
})
export class DSSET extends Model<DSSETAttributes, DSSETAttributes> implements DSSETAttributes {

    @Column({
    	primaryKey: true,
    	type: DataType.INTEGER 
    })
    	LID!: number;

}