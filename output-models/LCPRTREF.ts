import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface LCPRTREFAttributes {
    GUIDREF: string;
    GUIDPORTLET: string;
}

@Table({
	tableName: "LCPRTREF",
	timestamps: false 
})
export class LCPRTREF extends Model<LCPRTREFAttributes, LCPRTREFAttributes> implements LCPRTREFAttributes {

    @Column({
    	primaryKey: true,
    	type: DataType.STRING(40) 
    })
    	GUIDREF!: string;

    @Column({
    	primaryKey: true,
    	type: DataType.STRING(40) 
    })
    	GUIDPORTLET!: string;

}