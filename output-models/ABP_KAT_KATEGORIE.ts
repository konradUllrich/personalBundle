import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface ABP_KAT_KATEGORIEAttributes {
    LUSERIDINSERT?: number;
    DTEDIT?: Date;
    LUSERID?: number;
    STR_HINTERGRUNDFARBE?: string;
    DTINSERT?: Date;
    STR_SORTIERUNG?: string;
    STR_KATEGORIE?: string;
    STR_SCHRIFTFARBE?: string;
    STRID: string;
}

@Table({
	tableName: "ABP_KAT_KATEGORIE",
	timestamps: false 
})
export class ABP_KAT_KATEGORIE extends Model<ABP_KAT_KATEGORIEAttributes, ABP_KAT_KATEGORIEAttributes> implements ABP_KAT_KATEGORIEAttributes {

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	LUSERIDINSERT?: number;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DTEDIT?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	LUSERID?: number;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_HINTERGRUNDFARBE?: string;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DTINSERT?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_SORTIERUNG?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_KATEGORIE?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_SCHRIFTFARBE?: string;

    @Column({
    	primaryKey: true,
    	type: DataType.STRING(255) 
    })
    	STRID!: string;

}