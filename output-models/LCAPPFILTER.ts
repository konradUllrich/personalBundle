import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface LCAPPFILTERAttributes {
    STRGUID: string;
    XMLFILTER?: string;
    STRREFGUID?: string;
}

@Table({
	tableName: "LCAPPFILTER",
	timestamps: false 
})
export class LCAPPFILTER extends Model<LCAPPFILTERAttributes, LCAPPFILTERAttributes> implements LCAPPFILTERAttributes {

    @Column({
    	primaryKey: true,
    	type: DataType.STRING(40) 
    })
    	STRGUID!: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(-1) 
    })
    	XMLFILTER?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(40) 
    })
    	STRREFGUID?: string;

}