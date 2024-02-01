import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface ZE_KAT_ZEITTYPAttributes {
    STR_SCHRIFTFARBE?: string;
    STR_ID?: string;
    DTEDIT?: Date;
    STR_HINTERGRUNDFARBE?: string;
    LUSERID?: number;
    DTINSERT?: Date;
    STR_ZEITTYP?: string;
    LUSERIDINSERT?: number;
    STRID: string;
}

@Table({
	tableName: "ZE_KAT_ZEITTYP",
	timestamps: false 
})
export class ZE_KAT_ZEITTYP extends Model<ZE_KAT_ZEITTYPAttributes, ZE_KAT_ZEITTYPAttributes> implements ZE_KAT_ZEITTYPAttributes {

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_SCHRIFTFARBE?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_ID?: string;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DTEDIT?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_HINTERGRUNDFARBE?: string;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	LUSERID?: number;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DTINSERT?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_ZEITTYP?: string;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	LUSERIDINSERT?: number;

    @Column({
    	primaryKey: true,
    	type: DataType.STRING(255) 
    })
    	STRID!: string;

}