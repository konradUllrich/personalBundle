import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface LCAPPTITLEAttributes {
    STRAPPGUID: string;
    STRLANG: string;
    STRTYPE: string;
    STRITEM?: string;
}

@Table({
	tableName: "LCAPPTITLE",
	timestamps: false 
})
export class LCAPPTITLE extends Model<LCAPPTITLEAttributes, LCAPPTITLEAttributes> implements LCAPPTITLEAttributes {

    @Column({
    	primaryKey: true,
    	type: DataType.STRING(40) 
    })
    	STRAPPGUID!: string;

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