import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface CAL_KAT_STATUSAttributes {
    LUSERIDINSERT?: number;
    DTINSERT?: Date;
    STR_STATUS?: string;
    STR_SCHRIFTFARBE?: string;
    STRID: string;
    LUSERID?: number;
    STR_SORTIERUNG?: string;
    STR_HINTERGRUNDFARBE?: string;
    DTEDIT?: Date;
    STR_ID?: string;
    B_IMKALENDERANZEIGEN?: boolean;
}

@Table({
	tableName: "CAL_KAT_STATUS",
	timestamps: false 
})
export class CAL_KAT_STATUS extends Model<CAL_KAT_STATUSAttributes, CAL_KAT_STATUSAttributes> implements CAL_KAT_STATUSAttributes {

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	LUSERIDINSERT?: number;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DTINSERT?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_STATUS?: string;

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

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	LUSERID?: number;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_SORTIERUNG?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_HINTERGRUNDFARBE?: string;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DTEDIT?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_ID?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING 
    })
    	B_IMKALENDERANZEIGEN?: boolean;

}