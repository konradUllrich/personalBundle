import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface LCAPPLINKAttributes {
    STRGUID: string;
    STRAPPGUID: string;
    STRAPPFUPGUID?: string;
    STRTARGETGUID?: string;
    STRRECORD?: string;
    TXTSETTINGS?: string;
}

@Table({
	tableName: "LCAPPLINK",
	timestamps: false 
})
export class LCAPPLINK extends Model<LCAPPLINKAttributes, LCAPPLINKAttributes> implements LCAPPLINKAttributes {

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
    	type: DataType.STRING(40) 
    })
    	STRAPPFUPGUID?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(40) 
    })
    	STRTARGETGUID?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(20) 
    })
    	STRRECORD?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(-1) 
    })
    	TXTSETTINGS?: string;

}