import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface INV_T_INVENTARAttributes {
    STR_INVENTURNUMMER?: string;
    TXT_BESCHREIBUNG?: string;
    LUSERID?: number;
    LUSERIDINSERT?: number;
    REF_BEREICH?: string;
    DTEDIT?: Date;
    STR_BEZEICHNUNG?: string;
    REF_UNTERKATEGORIE?: string;
    DTINSERT?: Date;
    STRID: string;
    REF_KATEGORIE?: string;
}

@Table({
	tableName: "INV_T_INVENTAR",
	timestamps: false 
})
export class INV_T_INVENTAR extends Model<INV_T_INVENTARAttributes, INV_T_INVENTARAttributes> implements INV_T_INVENTARAttributes {

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_INVENTURNUMMER?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(-1) 
    })
    	TXT_BESCHREIBUNG?: string;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	LUSERID?: number;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	LUSERIDINSERT?: number;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	REF_BEREICH?: string;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DTEDIT?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_BEZEICHNUNG?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	REF_UNTERKATEGORIE?: string;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DTINSERT?: Date;

    @Column({
    	primaryKey: true,
    	type: DataType.STRING(255) 
    })
    	STRID!: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	REF_KATEGORIE?: string;

}