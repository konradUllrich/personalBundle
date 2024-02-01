import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface LCAPPCONTROLDRAttributes {
    STRGUID: string;
    STRDRFLAG?: string;
    STRAPPFUPGUID: string;
    STREXTAPPGUID?: string;
    STRCONTROLNAME: string;
    LMAXTEXT?: number;
    LPAGESIZE: number;
    LPAGE: number;
    STRAPPFILTERGUID?: string;
    STRCONTAINERTYPE?: string;
    STRSYSIDENT?: string;
    BSELECTPARENTKEY?: number;
    STRMAINDGGUID?: string;
    STRHIDDENSTATE?: string;
    STRLANGCONSTTITLE?: string;
    TXTSETTINGS?: string;
}

@Table({
	tableName: "LCAPPCONTROLDR",
	timestamps: false 
})
export class LCAPPCONTROLDR extends Model<LCAPPCONTROLDRAttributes, LCAPPCONTROLDRAttributes> implements LCAPPCONTROLDRAttributes {

    @Column({
    	primaryKey: true,
    	type: DataType.STRING(40) 
    })
    	STRGUID!: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(40) 
    })
    	STRDRFLAG?: string;

    @Column({
    	type: DataType.STRING(40) 
    })
    	STRAPPFUPGUID!: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(40) 
    })
    	STREXTAPPGUID?: string;

    @Column({
    	type: DataType.STRING(255) 
    })
    	STRCONTROLNAME!: string;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	LMAXTEXT?: number;

    @Column({
    	type: DataType.INTEGER 
    })
    	LPAGESIZE!: number;

    @Column({
    	type: DataType.INTEGER 
    })
    	LPAGE!: number;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(40) 
    })
    	STRAPPFILTERGUID?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STRCONTAINERTYPE?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STRSYSIDENT?: string;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	BSELECTPARENTKEY?: number;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(40) 
    })
    	STRMAINDGGUID?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(40) 
    })
    	STRHIDDENSTATE?: string;

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