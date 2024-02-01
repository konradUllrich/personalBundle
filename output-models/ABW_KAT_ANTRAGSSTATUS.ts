import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface ABW_KAT_ANTRAGSSTATUSAttributes {
    STR_ANTRAGSSTATUS?: string;
    STR_SCHRIFTFARBE?: string;
    L_FILEINFORMATION?: number;
    STR_SORTIERUNG?: string;
    DTEDIT?: Date;
    B_STATUSSTELLVERTRETUNG?: boolean;
    LUSERID?: number;
    STRID: string;
    LUSERIDINSERT?: number;
    DTINSERT?: Date;
    STR_HINTERGRUNDFARBE?: string;
    STR_ID?: string;
    B_STATUSFACHVORGESETZTER?: boolean;
}

@Table({
	tableName: "ABW_KAT_ANTRAGSSTATUS",
	timestamps: false 
})
export class ABW_KAT_ANTRAGSSTATUS extends Model<ABW_KAT_ANTRAGSSTATUSAttributes, ABW_KAT_ANTRAGSSTATUSAttributes> implements ABW_KAT_ANTRAGSSTATUSAttributes {

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_ANTRAGSSTATUS?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_SCHRIFTFARBE?: string;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	L_FILEINFORMATION?: number;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_SORTIERUNG?: string;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DTEDIT?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.STRING 
    })
    	B_STATUSSTELLVERTRETUNG?: boolean;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	LUSERID?: number;

    @Column({
    	primaryKey: true,
    	type: DataType.STRING(255) 
    })
    	STRID!: string;

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
    	STR_HINTERGRUNDFARBE?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_ID?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING 
    })
    	B_STATUSFACHVORGESETZTER?: boolean;

}