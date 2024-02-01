import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface DSCLASSTITLEAttributes {
    LCLASSID: number;
    STRLANG: string;
    STRNAME?: string;
}

@Table({
	tableName: "DSCLASSTITLE",
	timestamps: false 
})
export class DSCLASSTITLE extends Model<DSCLASSTITLEAttributes, DSCLASSTITLEAttributes> implements DSCLASSTITLEAttributes {

    @Column({
    	primaryKey: true,
    	type: DataType.INTEGER 
    })
    	LCLASSID!: number;

    @Column({
    	primaryKey: true,
    	type: DataType.STRING(16) 
    })
    	STRLANG!: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(80) 
    })
    	STRNAME?: string;

}