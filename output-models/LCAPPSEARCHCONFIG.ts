import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface LCAPPSEARCHCONFIGAttributes {
    STRGUID: string;
    STRAPPGUID: string;
    XMLCONFIG?: string;
}

@Table({
	tableName: "LCAPPSEARCHCONFIG",
	timestamps: false 
})
export class LCAPPSEARCHCONFIG extends Model<LCAPPSEARCHCONFIGAttributes, LCAPPSEARCHCONFIGAttributes> implements LCAPPSEARCHCONFIGAttributes {

    @Column({
    	primaryKey: true,
    	type: DataType.STRING(40) 
    })
    	STRGUID!: string;

    @Column({
    	type: DataType.STRING(40) 
    })
    	STRAPPGUID!: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(-1) 
    })
    	XMLCONFIG?: string;

}