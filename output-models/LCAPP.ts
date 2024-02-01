import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface LCAPPAttributes {
    STRGUID: string;
    STRAPPNAME: string;
    BISSYSTEM: number;
    STRAPPTEMPLGUID: string;
    LUSERIDCREATE: number;
    DTEDITCREATE: Date;
    LUSERIDCHANGED?: number;
    DTEDITCHANGED?: Date;
    STRAPPFUPGUID?: string;
    STRAPPPAGEGUID?: string;
    STRAPPLIC?: string;
    STRLANGCONSTTITLE?: string;
    STRLANGCONSTDESCRIPTION?: string;
    TXTSETTINGS?: string;
}

@Table({
	tableName: "LCAPP",
	timestamps: false 
})
export class LCAPP extends Model<LCAPPAttributes, LCAPPAttributes> implements LCAPPAttributes {

    @Column({
    	primaryKey: true,
    	type: DataType.STRING(40) 
    })
    	STRGUID!: string;

    @Column({
    	type: DataType.STRING(255) 
    })
    	STRAPPNAME!: string;

    @Column({
    	type: DataType.INTEGER 
    })
    	BISSYSTEM!: number;

    @Column({
    	type: DataType.STRING(40) 
    })
    	STRAPPTEMPLGUID!: string;

    @Column({
    	type: DataType.INTEGER 
    })
    	LUSERIDCREATE!: number;

    @Column({
    	type: DataType.DATE(7) 
    })
    	DTEDITCREATE!: Date;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	LUSERIDCHANGED?: number;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DTEDITCHANGED?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(40) 
    })
    	STRAPPFUPGUID?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(40) 
    })
    	STRAPPPAGEGUID?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(64) 
    })
    	STRAPPLIC?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(256) 
    })
    	STRLANGCONSTTITLE?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(256) 
    })
    	STRLANGCONSTDESCRIPTION?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(-1) 
    })
    	TXTSETTINGS?: string;

}