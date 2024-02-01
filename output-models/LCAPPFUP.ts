import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface LCAPPFUPAttributes {
    STRGUID: string;
    STRAPPGUID: string;
    STRFUPNAME?: string;
    STRFUPTYPE?: string;
    STRFUPVM?: string;
    STRSYSIDENT?: string;
    BNAVIGATION?: number;
    STRLANGCONSTTITLE?: string;
    TXTSETTINGS?: string;
}

@Table({
	tableName: "LCAPPFUP",
	timestamps: false 
})
export class LCAPPFUP extends Model<LCAPPFUPAttributes, LCAPPFUPAttributes> implements LCAPPFUPAttributes {

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
    	type: DataType.STRING(255) 
    })
    	STRFUPNAME?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(40) 
    })
    	STRFUPTYPE?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STRFUPVM?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STRSYSIDENT?: string;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	BNAVIGATION?: number;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(256) 
    })
    	STRLANGCONSTTITLE?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(-1) 
    })
    	TXTSETTINGS?: string;

}