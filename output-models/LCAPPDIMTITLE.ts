import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface LCAPPDIMTITLEAttributes {
    STRDIMGUID: string;
    STRLANG: string;
    STRTYPE: string;
    STRITEM?: string;
}

@Table({
	tableName: "LCAPPDIMTITLE",
	timestamps: false 
})
export class LCAPPDIMTITLE extends Model<LCAPPDIMTITLEAttributes, LCAPPDIMTITLEAttributes> implements LCAPPDIMTITLEAttributes {

    @Column({
    	primaryKey: true,
    	type: DataType.STRING(40) 
    })
    	STRDIMGUID!: string;

    @Column({
    	primaryKey: true,
    	type: DataType.STRING(16) 
    })
    	STRLANG!: string;

    @Column({
    	primaryKey: true,
    	type: DataType.STRING(32) 
    })
    	STRTYPE!: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(2048) 
    })
    	STRITEM?: string;

}