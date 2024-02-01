import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface LCAPPFIELDAttributes {
    STRGUID: string;
    STRNAME?: string;
    STRAPPDGGUID?: string;
    STRAPPREFGUID?: string;
    STRCALCGUID?: string;
    STRDBFIELDNAME?: string;
    STRREFFIELDGUID?: string;
    STRUPDDEFAULT?: string;
    BREFERENCE: number;
    BPRIMARYKEY?: number;
    STRPARENT?: string;
    STRFILEHANDLER?: string;
    STRDATATYPE: string;
    LPRECISION?: number;
    LSIZE?: number;
    STRDATAHANDLER: string;
    STRSYSIDENT?: string;
    BISSYSTEM: number;
    BNOTFILTERED: number;
    BINHERITPERM?: number;
    BINTERNAL?: number;
    STRLANGCONSTTITLE?: string;
    TXTSETTINGS?: string;
}

@Table({
	tableName: "LCAPPFIELD",
	timestamps: false 
})
export class LCAPPFIELD extends Model<LCAPPFIELDAttributes, LCAPPFIELDAttributes> implements LCAPPFIELDAttributes {

    @Column({
    	primaryKey: true,
    	type: DataType.STRING(40) 
    })
    	STRGUID!: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(128) 
    })
    	STRNAME?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(40) 
    })
    	STRAPPDGGUID?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(40) 
    })
    	STRAPPREFGUID?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(40) 
    })
    	STRCALCGUID?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STRDBFIELDNAME?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(40) 
    })
    	STRREFFIELDGUID?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STRUPDDEFAULT?: string;

    @Column({
    	type: DataType.INTEGER 
    })
    	BREFERENCE!: number;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	BPRIMARYKEY?: number;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(40) 
    })
    	STRPARENT?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STRFILEHANDLER?: string;

    @Column({
    	type: DataType.STRING(40) 
    })
    	STRDATATYPE!: string;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	LPRECISION?: number;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	LSIZE?: number;

    @Column({
    	type: DataType.STRING(255) 
    })
    	STRDATAHANDLER!: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STRSYSIDENT?: string;

    @Column({
    	type: DataType.INTEGER 
    })
    	BISSYSTEM!: number;

    @Column({
    	type: DataType.INTEGER 
    })
    	BNOTFILTERED!: number;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	BINHERITPERM?: number;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	BINTERNAL?: number;

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