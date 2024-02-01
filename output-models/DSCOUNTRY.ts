import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface DSCOUNTRYAttributes {
    LID: number;
    STRFRIENDLYNAME?: string;
}

@Table({
	tableName: "DSCOUNTRY",
	timestamps: false 
})
export class DSCOUNTRY extends Model<DSCOUNTRYAttributes, DSCOUNTRYAttributes> implements DSCOUNTRYAttributes {

    @Column({
    	primaryKey: true,
    	type: DataType.INTEGER 
    })
    	LID!: number;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(32) 
    })
    	STRFRIENDLYNAME?: string;

}