import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface LCAPPDGAttributes {
    STRGUID: string;
    STRDGNAME?: string;
    STRAPPGUID?: string;
    STRCONNECT: string;
    STRTABLENAME?: string;
    STRPARENTDGGUID?: string;
    BHASREFERENCE: number;
    BDELETABLE: number;
    STRDATAHANDLER: string;
    STRAPPFILTERGUID?: string;
    STROWNERFIELD?: string;
    STRSYSIDENT?: string;
    LABSLEVEL: number;
    BFOREIGN?: number;
    BINTERNAL?: number;
    STRLANGCONSTTITLE?: string;
    STRFOREIGNKEYNAME?: string;
    TXTSETTINGS?: string;
}

@Table({
	tableName: "LCAPPDG",
	timestamps: false 
})
export class LCAPPDG extends Model<LCAPPDGAttributes, LCAPPDGAttributes> implements LCAPPDGAttributes {

    @Column({
    	primaryKey: true,
    	type: DataType.STRING(40) 
    })
    	STRGUID!: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STRDGNAME?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(40) 
    })
    	STRAPPGUID?: string;

    @Column({
    	type: DataType.STRING(255) 
    })
    	STRCONNECT!: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STRTABLENAME?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(40) 
    })
    	STRPARENTDGGUID?: string;

    @Column({
    	type: DataType.INTEGER 
    })
    	BHASREFERENCE!: number;

    @Column({
    	type: DataType.INTEGER 
    })
    	BDELETABLE!: number;

    @Column({
    	type: DataType.STRING(255) 
    })
    	STRDATAHANDLER!: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(40) 
    })
    	STRAPPFILTERGUID?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(40) 
    })
    	STROWNERFIELD?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STRSYSIDENT?: string;

    @Column({
    	type: DataType.INTEGER 
    })
    	LABSLEVEL!: number;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	BFOREIGN?: number;

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
    	type: DataType.STRING(256) 
    })
    	STRFOREIGNKEYNAME?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(-1) 
    })
    	TXTSETTINGS?: string;

}